class AddUrlToShares < ActiveRecord::Migration
  def change
    add_column :shares, :url, :string
  end
end
