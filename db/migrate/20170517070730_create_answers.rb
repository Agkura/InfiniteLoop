class CreateAnswers < ActiveRecord::Migration[5.0]
  def change
    create_table :answers do |t|
      t.text :body, null: false
      t.integer :author_id, null: false
      t.integer :question_id, null: false
      t.index :author_id
      t.index :question_id

      t.timestamps
    end
    add_index :answers, [:author_id, :question_id], unique: true
  end
end
