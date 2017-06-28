require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module InfiniteLoop
  class Application < Rails::Application
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.

    config.middleware.insert_before 0, Rack::Cors do
      allow do
        origins 'http://matthew-moon.com/down-the-hatch'
        resource '/highscores', :headers => :any, :methods => [:get, :post]
      end
    end

    config.time_zone = 'Pacific Time (US & Canada)'
    config.active_record.default_timezone = :local
  end
end
