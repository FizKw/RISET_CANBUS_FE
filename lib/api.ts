export async function getOdometerHistory(
  vehicleId: string,
  range: string = "1h"
) {
  const res = await fetch(
    `https://riset-be.mpiskawe.my.id/api/telemetry/odometer?vehicleId=${vehicleId}&range=${range}`,
  );
  if (!res.ok) throw new Error("Failed to fetch odometer history");
  const fullResponse = await res.json();

  return fullResponse.data;
}
