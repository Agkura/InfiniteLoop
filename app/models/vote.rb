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
end
