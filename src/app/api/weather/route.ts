export async function GET() {
   const res = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=6.5244&longitude=3.3792&current=temperature_2m,weathercode&temperature_unit=celsius",
      { next: { revalidate: 1800 } },
   );

   const data = await res.json();

   return Response.json({
      temp: Math.round(data.current.temperature_2m),
      code: data.current.weathercode,
   });
}
