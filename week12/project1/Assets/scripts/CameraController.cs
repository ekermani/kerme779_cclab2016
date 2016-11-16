using UnityEngine;
using System.Collections;

public class CameraController : MonoBehaviour {
	public GameObject player;
	private Vector3 offset;

	// Use this for initialization
	void Start () {
		offset = transform.position - player.transform.position;
	}
	



	// For Follow Cameras, Procedural animations, etc., it is best to use LateUpdate
	// LateUpdate: runs all items that have been processed

	void LateUpdate () {
		transform.position = player.transform.position + offset;
	}
}

