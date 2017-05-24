# == Schema Information
#
# Table name: questions
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  body       :text             not null
#  author_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Question < ApplicationRecord
  validates :title, :body, :author_id, presence: true

  belongs_to :author, class_name: :User, foreign_key: :author_id

  has_many :answers, dependent: :destroy
  has_many :question_votes

  def answer_count
    self.answers.count
  end

  def vote_count
    self.question_votes.map { | qvote | qvote.score }.inject(:+)
  end
end
