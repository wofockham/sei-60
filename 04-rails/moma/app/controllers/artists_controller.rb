class ArtistsController < ApplicationController
  def index
    @artists = Artist.all
  end

  def new
    @artist = Artist.new # an example of an artist for the form_helper to look at
  end

  def create
    artist = Artist.create artist_params
    redirect_to artist # GET to show
  end

  def edit
    @artist = Artist.find params[:id]
  end

  def update
    artist = Artist.find params[:id]
    artist.update artist_params
    redirect_to artist # GET to show
  end

  def show
    @artist = Artist.find params[:id]
  end

  def destroy
    artist = Artist.find params[:id]
    artist.destroy
    redirect_to artists_path
  end

  private
  def artist_params # strong_params
    params.require(:artist).permit(:name, :nationality, :dob, :period, :image)
  end
end
