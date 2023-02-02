class CreateButterflies < ActiveRecord::Migration[5.2]
  def change
    create_table :butterflies do |t|
      t.text :name
      t.text :image
      t.text :family

      t.timestamps
    end
  end
end
