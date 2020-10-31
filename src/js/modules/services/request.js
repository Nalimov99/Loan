const postData = async function(url, data) {
    let res = await fetch(url, {
        method: "POST",
        body: data
    });

    return await res.text();
};

export default postData;