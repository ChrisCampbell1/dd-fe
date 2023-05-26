const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/email`

const sendEmail = async (form) => {
  try {
    const res = await fetch(`${BASE_URL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form)
    })
    console.log(res)
  } catch (error) {
    console.log(error)
  }
}

export {
  sendEmail
}
