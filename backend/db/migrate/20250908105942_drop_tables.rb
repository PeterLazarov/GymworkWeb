class DropTables < ActiveRecord::Migration[8.0]
  def change
    # Drop tables with foreign keys first
    drop_table :sessions
    drop_table :user_database_authentications
    drop_table :user_emails

    # Drop the main users table last since other tables reference it
    drop_table :users
  end
end
