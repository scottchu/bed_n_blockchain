defmodule APIWeb.ChangesetView do
  use APIWeb, :view

  import Ecto.Changeset, only: [traverse_errors: 2]

  def render("error.json", %{changeset: changeset}) do
    %{errors: traverse_errors(changeset, &translate_error/1)}
  end
end