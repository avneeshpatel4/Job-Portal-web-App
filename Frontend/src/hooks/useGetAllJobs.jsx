import { setAllJobs } from "@/redux/jobSlice";
import { JOB_API_ENDPOINT } from "../utils/data";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const useGetAllJobs = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { searchedQuery, allJobs } = useSelector((store) => store.jobs);

  useEffect(() => {
    const fetchAllJobs = async () => {
      setLoading(true);
      setError(null);
      console.log(JOB_API_ENDPOINT);

      try {
        const res = await axios.get(`${JOB_API_ENDPOINT}/get?keyword=${searchedQuery}`, {
          withCredentials: true,
        });
        console.log("API Response:", res.data);
        if (res.data.status) {
          dispatch(setAllJobs(res.data.jobs));
        } else {
          setError("Failed to fetch jobs.");
        }
      } catch (err) {
        console.error("Fetch Error:", err);
        setError(err?.response?.data?.message || err.message || "An error occurred.");
      } finally {
        setLoading(false);
      }
    };

    fetchAllJobs();
  }, [dispatch, searchedQuery]); // ✅ include searchedQuery

  return { allJobs, loading, error };
};

export default useGetAllJobs;
