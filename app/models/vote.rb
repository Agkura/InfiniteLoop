# == Schema Information
#
# Table name: votes
#
#  id         :integer          not null, primary key
#  status     :integer          not null
#  author_id  :integer          not null
#  answer_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Vote < ApplicationRecord
  validates :status, :author_id, presence: true
  validates :author_id, uniqueness: {scope: :answer_id}

  after_initialize :ensure_zero_votes

  belongs_to :answer
  belongs_to :author, class_name: :User, foreign_key: :author_id


  private

  def ensure_zero_votes
    self.status ||= 0;
  end
end
