"use client"
import { useAppSelector } from "@/redux/hooks";
import moment from "moment";
const MyProfile = () => {
  const user = useAppSelector(state => state.auth.user)
  return (
    <>
      <ul className="student-profile-info">
        <li>
          <h5>Registration Date :</h5>
          <span>{moment(user?.createdAt as string).format('MMM DD, YYYY hh:mm:ss')} </span>
        </li>
        <li>
          <h5>First Name :</h5>
          <span className="text-capitalize"> {user?.firstname} {user?.lastname} </span>
        </li>
       

        <li>
          <h5>Email :</h5>
          <span> {user?.email} </span>
        </li>
        <li>
          <h5>Phone :</h5>
          <span> +{user?.phone} </span>
        </li>
        {/* <li>
          <h5>Gender :</h5>
          <span> Male </span>
        </li> */}
        {/* <li>
          <h5>Biography :</h5>
          <span>
            Alison Johnson is finishing her first year at DePaul University
            where she is interested in business. Although she has yet to declare
            a major, she’s considering finance or marketing. After watching her
            parents run a restaurant for years, she knew at a very young age
            that she also wanted to go into business.
          </span>
        </li> */}
      </ul>
    </>
  );
};

export default MyProfile;
