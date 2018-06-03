modules = Code.load_file("factory.ex", "./test/support")

{Listing.Factory, _} = hd(modules)

accounts = DB.Repo.all(User.Account)

random_account_id = fn (accounts) ->
  accounts
  |> Enum.random
  |> Map.get(:id)
end

1..100
|> Enum.map(&(Listing.Factory.create(:property, %{counter: &1})))
|> Enum.map(&(Map.put(&1, :account_id, random_account_id.(accounts))))
|> Enum.map(&Listing.Property.changeset(%Listing.Property{}, &1))
|> Enum.map(&DB.Repo.insert!(&1))