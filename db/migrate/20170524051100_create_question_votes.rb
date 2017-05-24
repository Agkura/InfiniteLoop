class CreateQuestionVotes < ActiveRecord::Migration[5.0]
  def change
    create_table :question_votes do |t|
      t.integer :author_id, null: false
      t.integer :question_id, null: false
      t.integer :score, null: false
      t.index :author_id
      t.index :question_id

      t.timestamps
    end
    add_index :question_votes, [:author_id, :question_id], unique: true
  end
end
