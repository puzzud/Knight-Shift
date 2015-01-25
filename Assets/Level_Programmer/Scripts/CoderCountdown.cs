﻿using UnityEngine;
using System.Collections;
using System.Diagnostics;
using System;

public class CoderCountdown : MonoBehaviour {
	
	public double duration;
	
	private static CoderCountdown instance;
	
	Stopwatch sw;
	
	
	void Awake () {
		instance = this;
		sw = new Stopwatch();
	}
	
	public static void StartStopWatch () {
		instance.sw.Start();
	}
	
	public static void StopStopWatch () {
		instance.sw.Stop();
	}
	
	void Update () {
		
		if (Input.GetKeyDown(KeyCode.T)) {
			StartStopWatch();
		}
		
		guiText.text = Mathf.Max((float)(duration - sw.Elapsed.TotalSeconds), 0).ToString("F2");
		if (sw.Elapsed.TotalSeconds > duration) {
			print ("Time's up");
		}
	}
}