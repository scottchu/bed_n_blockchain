defmodule DB.Repo.Migrations.AddPropertiesTable do
  use Ecto.Migration

  def change do
    create table("properties") do
      add(:capacity, :integer, null: false)
      add(:name, :string, null: false)
      add(:price, :decimal, null: false, precision: 12, scale: 2)
      add(:type, :string, null: false)

      add(:account_id, references("accounts"), null: false)

      timestamps()
    end

    create(index("properties", [:capacity]))
    create(index("properties", [:name]))
    create(index("properties", [:price]))
    create(index("properties", [:type]))
    create(index("properties", [:account_id]))
  end
end
