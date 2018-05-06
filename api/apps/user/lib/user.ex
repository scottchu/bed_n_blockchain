defmodule User do
  alias DB.Repo
  alias User.Account

  import Ecto.Query

  import Comeonin.Argon2, only: [checkpw: 2, dummy_checkpw: 0]

  def create_account(params \\ %{}) do
    Account.registration_changeset(%Account{}, params)
    |> Repo.insert
  end

  def find_account(id) do
    case Repo.get(Account, id) do
      nil -> {:error, nil}
      account -> {:ok, account}
    end
  end

  def authenticate(%{"email" => email, "password" => password}) do
    account = Repo.get_by(Account, email: String.downcase(email))

    case check_password(account, password) do
      true -> {:ok, account}
      _ -> {:error, "Invalid email or password"}
    end
  end

  defp check_password(account, password) do
    case account do
      nil -> dummy_checkpw()
      _ -> checkpw(password, account.password_hash)
    end
  end
end
