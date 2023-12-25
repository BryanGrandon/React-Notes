function Avatar() {
  return (
    <img
      className="avatar"
      src="https://images.pexels.com/photos/5700184/pexels-photo-5700184.jpeg?auto=compress&cs=tinysrgb&w=400"
      alt="Alex Green"
      width={100}
      height={100}
    />
  );
}

function Profile() {
  return <Avatar />;
}
