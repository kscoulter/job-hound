class JobsController < ApplicationController
  def index
    render json: Job.all
  end

  def show
    @job = Job.find(params[:id])
    render json: @job
  end

  def create
    @job = Job.new(job_params)
    if @job.save
      render json: @job, status: 200
    else
      render json: "error!"
    end
  end

  def update
    @job = Job.find(params[:id])
    if @job.update(job_params)
      render json: @job, status: 200
    else
      render json: "error!"
    end
  end

  def destroy
    @job = Job.find(params[:id])
    @job.destroy
    render json: "success"
  end

  private
  def job_params
    params.require(:job).permit(:company, :title, :date_applied, :date_replied, :phone_interview, :interview, :notes, :cover_letter, :resume, :questions )
  end
end
