import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";

function Page({ children }) {
    return (
        <Typography component={"span"}>
            <main>
                <div>{children}</div>
            </main>
            <footer>
                <Grid container wrap="nowrap" spacing={1} direction="column">
                    <Grid item className="text-center">
                        <Link href="/privacy" color="textSecondary">Privacy Policy</Link>
                    </Grid>
                </Grid>
            </footer>
        </Typography>
    )
}

export default Page;
