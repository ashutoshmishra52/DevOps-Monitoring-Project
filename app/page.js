export default function Home() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>DevOps Monitoring Dashboard</h1>

      <div>
        <h2>AWS Metrics</h2>
        <p>CPU Usage: Loading...</p>
        <p>Instances: Loading...</p>
      </div>

      <div>
        <h2>Cloudflare Metrics</h2>
        <p>Requests: Loading...</p>
        <p>Errors: Loading...</p>
      </div>
    </div>
  );
}
