alias User.{Account, Profile}

accounts = [
  %{
    email: "scott@email.com",
    password: "123456"
  },
  %{
    email: "user1@email.com",
    password: "password"
  },
  %{
    email: "user2@email.com",
    password: "password"
  }
]

accounts
|> Enum.map(&Account.registration_changeset(%Account{}, &1))
|> Enum.map(&DB.Repo.insert!(&1))