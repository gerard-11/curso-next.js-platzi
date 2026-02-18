import { validateAccessToken } from "app/utils/auth/validateAccessToken";

export default async function MyAccountPage() {
    const customer = await validateAccessToken();
if(!customer) {
    return null
}
    return (
        <div>
            <section>
                <h2>Your info</h2>
                <h1>Bienvenido {customer?.name}</h1>
                <p>email: {customer.email}</p>
            </section>
        </div>
    );
}