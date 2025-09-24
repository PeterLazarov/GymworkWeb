namespace :db do
  namespace :structure do
    task :dump => :environment do
      # Get the configuration
      config = ActiveRecord::Base.connection_db_config
      filename = ENV['DB_STRUCTURE'] || File.join(ActiveRecord::Tasks::DatabaseTasks.db_dir, "structure.sql")

      # Create a temporary file for the initial dump
      require 'tempfile'
      temp_file = Tempfile.new(['structure', '.sql'])

      begin
        # Dump the schema using pg_dump
        dump_cmd = [
          "PGPASSWORD=#{config.configuration_hash[:password]}",
          "pg_dump",
          "-s",                    # schema-only
          "-x",                    # no privileges
          "--no-comments",         # no comments
          "--no-publications",     # no publications
          "-d", config.configuration_hash[:database],
          "-h", config.configuration_hash[:host],
          "-p", config.configuration_hash[:port].to_s,
          "-U", config.configuration_hash[:username],
          ">", temp_file.path
        ].join(' ')

        system(dump_cmd, exception: true)

        # Filter out transaction_timeout and write to final file
        filter_cmd = [
          "cat", temp_file.path,
          "|", "grep -v '^SET transaction_timeout'",
          ">", filename
        ].join(' ')

        system(filter_cmd, exception: true)

        # Append search path and migrations
        File.open(filename, "a") do |f|
          f.puts "\nSET search_path TO #{ActiveRecord::Base.connection.schema_search_path};\n\n"

          # Append the schema migrations
          migrations = ActiveRecord::Base.connection.execute("SELECT version FROM schema_migrations ORDER BY version").map do |row|
            row['version']
          end

          f.puts "INSERT INTO \"schema_migrations\" (version) VALUES"
          f.puts migrations.map { |version| "('#{version}')" }.join(",\n") + ";\n"
        end
      ensure
        temp_file.close
        temp_file.unlink
      end
    end
  end
end
