defmodule DB.Repo.Migrations.AddProfilesTable do
  use Ecto.Migration

  def change do
    create table(:profiles) do
      add(:account_id, references(:accounts), null: false)
      add(:name, :string, null: false)

      timestamps()
    end

    create(index(:profiles, [:account_id], unique: true))
  end
end
