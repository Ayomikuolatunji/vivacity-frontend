import { apiService } from "../services";

export interface Applicant {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export const crudAPI = apiService.injectEndpoints({
  endpoints: (build) => ({
    createApplicant: build.mutation<void, Applicant>({
      query: (data) => ({
        url: "/awesome/applicant",
        method: "POST",
        body: data,
      }),
    }),
    updateApplicant: build.mutation<Applicant, Applicant>({
      query: (body) => {
        return {
          url: `/awesome/applicant/${body.id}`,
          method: "PATCH",
          body,
        };
      },
      invalidatesTags: ["Applicant"],
    }),
    getApplicant: build.mutation<Applicant, string>({
      query: (applicantId) => ({
        url: `/awesome/applicant/${applicantId}`,
        method: "GET",
      }),
      invalidatesTags: ["Applicant"],
    }),
    deleteApplicant: build.mutation<void, string>({
      query: (applicantId) => {
        return {
          url: `/awesome/applicant/${applicantId}`,
          method: "DELETE",
        };
      },
    }),
  }),
});

export const {
  useCreateApplicantMutation,
  useGetApplicantMutation,
  useDeleteApplicantMutation,
  useUpdateApplicantMutation,
} = crudAPI;
