class AddDefaultToScoreAndStatus < ActiveRecord::Migration[5.0]
  def change
    change_column_default :question_votes, :score, 0
    change_column_default :votes, :status, 0
  end
end
