class CreateVotes < ActiveRecord::Migration[5.0]
  def change
    create_table :votes do |t|
      t.integer :status, null: false
      t.integer :author_id, null: false
      t.integer :answer_id, null: false
      t.index :author_id
      t.index :answer_id

      t.timestamps
    end

    add_index :votes, [:author_id, :answer_id], unique: true
  end
end
