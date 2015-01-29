class RemoveCreateAtFromShares < ActiveRecord::Migration
  def change
    remove_column :shares, :create_at, :datetime
  end
end
