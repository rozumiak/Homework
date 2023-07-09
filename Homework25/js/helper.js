export async function getResponse(request) {
    const response = await fetch(request, {
        method: "GET"
    });
    try {
        return {
            status: "success",
            data: await response.json(),
        }
    } catch (error) {
        console.log(error)
        return {
            status: "error",
            data:null
        }
    }

}