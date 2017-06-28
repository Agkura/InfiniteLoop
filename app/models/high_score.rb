class HighScore < ApplicationRecord
  validates :name, :score, presence: true
  self.table_name = "highscores"
end
