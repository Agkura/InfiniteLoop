# == Schema Information
#
# Table name: question_votes
#
#  id          :integer          not null, primary key
#  author_id   :integer          not null
#  question_id :integer          not null
#  score       :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class QuestionVote < ApplicationRecord
  validates :author_id, :score, presence: true
  validates :question_id, uniqueness: { scope: :author_id }


  belongs_to :author, class_name: :User, foreign_key: :author_id
  belongs_to :question

end
