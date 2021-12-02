import { useState, useEffect } from "react";
import useFetch from "hooks/useFetch";
import { Card, Avatar, Typography, CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import { LoadingButton } from "@mui/lab";

export default function Home() {
	const { response, error, loading } = useFetch("/users", {});
	const avatar = "https://bit.ly/3p5CJOK";
	const [user, setUser] = useState(null);
	const [userError, setUserError] = useState(null);

	useEffect(() => {
		setUser(response);
		setUserError(error);
		console.log(response);
		/*
		const fetch = async () => {
			http("/users/6")
				.then((res) => {
					console.log(res.data);
				})
				.catch((err) => {
					console.log(err);
				});
		};

		fetch();
		*/
	}, [response, error]);

	return (
		<>
			{loading ? (
				<Box loading>
					<CircularProgress />
				</Box>
			) : (
				<Box
					sx={{
						display: "flex",
						flexWrap: "wrap",
						gap: "1rem",
					}}
				>
					{user &&
						user.map((data) => (
							<Card
								sx={{
									display: "flex",
									flexDirection: "column",
									flexGrow: 1,
									flexBasis: "120px",
									flexShrink: 2,
									alignItems: "center",
									gap: "1rem",
									padding: "0.5rem",
								}}
							>
								<Avatar src={data.avatar} alt={data.name} />
								<Box
									sx={{
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
									}}
								>
									<Typography sx={{ textAlign: "center" }} variant="body2">
										{data.name}
									</Typography>
								</Box>
							</Card>
						))}
				</Box>
			)}
		</>
	);
}
