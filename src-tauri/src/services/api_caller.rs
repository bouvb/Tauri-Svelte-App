// API caller module services functions
use tauri_plugin_http::reqwest;

const DICT_API_URL: &str = "https://api.dictionaryapi.dev/api/v2/entries/en";

#[tauri::command]
pub async fn call_api(word: &str) -> Result<String, String> {
    println!("I was invoked from frontend!");

    // let res = reqwest::get(DICT_API_URL).await;
    let text = reqwest::get(format!("{url}/{word}", url=DICT_API_URL, word=word)).await
        .map_err(|e| e.to_string())?.text()
        .await
        .map_err(|e| e.to_string())?;

    return Ok(text);
}
