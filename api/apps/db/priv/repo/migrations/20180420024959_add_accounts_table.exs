defmodule DB.Repo.Migrations.AddAccountsTable do
  use Ecto.Migration

  def change do
    create table("accounts") do
      add(:email, :string, null: false)
      add(:password_hash, :string, null: false)

      timestamps()
    end

    create(index(:accounts, [:email], unique: true))
  end
end
