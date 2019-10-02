package com.example.happybytes;

import android.os.Bundle;
import android.os.StrictMode;
import android.webkit.JavascriptInterface;
import android.webkit.WebView;

import androidx.appcompat.app.AppCompatActivity;
public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        StrictMode.VmPolicy.Builder builder = new StrictMode.VmPolicy.Builder();
        StrictMode.setVmPolicy(builder.build());

        class JavaScriptInterface {
            @JavascriptInterface
            public String getFileContents(){
                return readAssetsContent("file:///android_asset/jquery-3.4.1.min.js");
            }

            private String readAssetsContent(String s) {
                return "true";
            }
        }

        String myurl="file:///android_asset/index.html";
        WebView view= (WebView) this.findViewById(R.id.webView);
        view.getSettings().setJavaScriptEnabled(true);

        view.addJavascriptInterface(new JavaScriptInterface(), "android");

        view.loadUrl(myurl);

    }
}
