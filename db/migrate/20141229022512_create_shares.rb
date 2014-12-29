class CreateShares < ActiveRecord::Migration
  def change
    create_table :shares do |t|
      t.integer :from_user_id
      t.integer :to_user_id
      t.string :to_email
      t.datetime :create_at

      t.timestamps null: false
    end
  end
end
