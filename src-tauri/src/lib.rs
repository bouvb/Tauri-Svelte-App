// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
mod services;

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_http::init()) // add plugin here
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![
            services::home::greet,
            services::api_caller::call_api
        ]) // func invoked on the front end part
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
