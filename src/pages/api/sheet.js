import { google } from "googleapis"

export default async function handler(req, res) {
  const client_email = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL
  const private_key = process.env.NEXT_PUBLIC_GOOGLE_PRIVATE_KEY

  const client = new google.auth.JWT(
    client_email,
    null,
    private_key.replace(/\\n/g, "\n"), // 개행문자 처리
    ["https://www.googleapis.com/auth/spreadsheets"],
  )

  const sheets = google.sheets({ version: "v4", auth: client })
  // const spreadsheetId = "1ajGlvpYxCeZ7BD3zV2qrxnY-LWz6sUGgMR6fV68F3g0" // 스프레드시트 ID 주성계정
  // const spreadsheetId = "13vecn8TGf2H_4G-U8Kwi-2vZGIbBYW3vgR8zu--QtXE" // 스프레드시트 ID 선주계정
  const spreadsheetId = "1uSpX-FNuTZP5faT6yhwFhiwwOhBakbUAGFBuaVqDi7A" // 스프레드시트 ID 티파니누나 계정
  const range = "Sheet1!A2:E10000" // 데이터를 불러올 범위

  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range,
    })

    // 데이터를 JSON 형태로 클라이언트에 응답
    res.status(200).json({ data: response.data.values })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
