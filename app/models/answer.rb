# == Schema Information
#
# Table name: answers
#
#  id          :integer          not null, primary key
#  body        :text             not null
#  author_id   :integer          not null
#  question_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Answer < ApplicationRecord
  validates :body, :author_id, :question_id, presence: true
  validates :author_id, uniqueness: {scope: :question_id}

  belongs_to :question
  belongs_to :author, class_name: :User, foreign_key: :author_id
  has_many :answer_votes
end
