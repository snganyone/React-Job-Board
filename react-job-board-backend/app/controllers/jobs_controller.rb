class JobsController < ApplicationController
    def index
        if(params[:query])
            @job = Job.search(params[:query])
            render json: @job, except: [:created_at, :updated_at]
        else
            @jobs = Job.all
            render json: @jobs, except: [:created_at, :updated_at]
        end
    end
    
    def create
        @job = Job.create(job_params)
        render json: @job, except: [:created_at, :updated_at]
    end

    def destroy 
        @job = Job.find(params[:id])
        if @job
            @job.destroy
            render json: {message: "Job Deleted", id: @job.id}
        else
            render json: {error: "Unable to delete Job Post"}
        end
    end


    def job_params
		params.require(:job).permit(:title, :employer, :location, :description, :release_date, :job_type)
    end

end