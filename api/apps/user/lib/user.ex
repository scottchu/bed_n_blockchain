defmodule User do
  alias DB.Repo
  alias User.Account

  import Ecto.Query

  def create_account(params \\ %{}) do
    Account.registration_changeset(%Account{}, params)
    |> Repo.insert()
  end
end
