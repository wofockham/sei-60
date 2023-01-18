class WorksController < ApplicationController
  def index
    @works = Work.all
  end

  def new
  end

  def edit
  end

  def show
    @work = Work.find params[:id]
  end
end
