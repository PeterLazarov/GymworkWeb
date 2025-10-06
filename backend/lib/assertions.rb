module Assertions
  class << self
    protected def wrap_error(error_or_message)
      if error_or_message.is_a? ::Exception
        error_or_message
      else
        Error.new error_or_message
      end
    end
  end

  class Error < StandardError
    def initialize(message)
      super

      actual_caller_frame = caller.index { |frame| !frame.include? 'assertions' } || 0
      backtrace = caller[actual_caller_frame..]
      set_backtrace backtrace
    end
  end

  extend self

  def precondition(condition, message, options = {})
    precondition_failure message, options unless condition
  end

  def precondition_failure(message, options = {})
    error = Assertions.wrap_error message
    Honeybadger.context options.merge(fingerprint: error.message)
    raise error
  end
end
