import { Fragment } from "react/cjs/react.production.min";
import { useRouter } from "next/router";
import MeetupDetail from "../components/meetups/MeetupDetail";

const DUMMY_DATA = [
  {
    id: "m1",
    image:
      "https://images.unsplash.com/photo-1568904924166-1dec5d529cb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80",
    title: "Sydney Opera House",
    address: "123 Australia St",
    description: "First MEETUP!",
  },
  {
    id: "m2",
    image:
      "https://images.unsplash.com/photo-1640693939691-06d05136becd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=838&q=80",
    title: "Europe House",
    address: "123 Europe St",
    description: "Second MEETUP!",
  },
];

function MeetupDetails() {
  const router = useRouter();

  const result = DUMMY_DATA.find(({ id }) => id === router.query.meetupID);

  return (
    <Fragment>
      <MeetupDetail
        image={result.image}
        title={result.title}
        address={result.address}
        description={result.description}
      />
    </Fragment>
  );
}

export async function getStaticProps(context) {
  //fetch data from API
  const meetupID = context.params.meetupID;

  return {
    props: {
      meetupData: [
        {
          id: "m1",
          image:
            "https://images.unsplash.com/photo-1568904924166-1dec5d529cb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80",
          title: "Sydney Opera House",
          address: "123 Australia St",
          description: "First MEETUP!",
        },
        {
          id: "m2",
          image:
            "https://images.unsplash.com/photo-1640693939691-06d05136becd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=838&q=80",
          title: "Europe House",
          address: "123 Europe St",
          description: "Second MEETUP!",
        },
      ],
    },
    revalidate: 60,
  };
}

export async function getStaticPaths() {
  //lets NextJS know all possible paths to generate
  return {
    fallback: false,
    paths: [{ params: { meetupID: "m1" } }, { params: { meetupID: "m2" } }],
  };
}

export default MeetupDetails;
