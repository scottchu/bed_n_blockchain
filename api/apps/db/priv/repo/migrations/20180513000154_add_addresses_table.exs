defmodule DB.Repo.Migrations.AddAddressesTable do
  use Ecto.Migration

  def change do
    create table("addresses") do
      add(:street1, :string, null: false)
      add(:street2, :string)
      add(:city, :string, null: false)
      add(:state, :string, null: false)
      add(:country, :string, null: false)
      add(:postal_code, :string)

      add(:coordinate, :point, null: false)

      timestamps()
    end

    create(index(:addresses, [:city]))
    create(index(:addresses, [:state]))
    create(index(:addresses, [:country]))
    create(index(:addresses, [:coordinate], using: "GiST"))
  end
end
