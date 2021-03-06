﻿using UnityEngine;
using System.Collections;

public class PlayerMovement : MonoBehaviour {

	public int directionX = 0;
	public float speed = 1f;
	public bool needsCollision = true;

	private Animator animator;
	private bool collision = false;
	// Use this for initialization
	void Start () {
		animator = GetComponent<Animator> ();	
	}
	
	// Update is called once per frame
	void Update () {
		if (Input.GetMouseButtonDown (0)) {
						Vector3 mouseClick = Camera.main.ScreenToWorldPoint (Input.mousePosition);

			if(mouseClick.x - transform.position.x > 0.1f){
				directionX = 1;
				animator.SetInteger ("AnimState", 2);

			} else if (mouseClick.x - transform.position.x < 0.1f) {
				directionX = -1;
				animator.SetInteger ("AnimState", 1);
			} else {
				directionX = 0;
				animator.SetInteger ("AnimState", 0);
				//print ("standing");
			} 
		}

		if (directionX != 0) {
			transform.Translate(directionX * speed * Time.deltaTime,0,0);
		}
	}
}
