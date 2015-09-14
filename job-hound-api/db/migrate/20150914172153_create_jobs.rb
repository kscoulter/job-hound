class CreateJobs < ActiveRecord::Migration
  def change
    create_table :jobs do |t|
      t.string :company
      t.string :title
      t.datetime :date_applied
      t.datetime :date_replied
      t.datetime :phone_interview
      t.datetime :interview
      t.text :notes
      t.text :cover_letter
      t.text :resume
      t.text :questions

      t.timestamps null: false
    end
  end
end
