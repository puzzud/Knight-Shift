﻿#pragma strict

public class Food extends MonoBehaviour
{
  public var heatLevel : float = 0.0f;
  public var appliedHeatLevel : float = 0.0f;
  
  public var cookedLevel : float = 0.0f;
  public var heatResistance : float = 0.4f;
  
  private var dragging : boolean = false;

  function Start()
  {
    
  }

  function Update()
  {
    // Transfer heat slowly.
    if( heatLevel != appliedHeatLevel )
    {
      heatLevel = HeatTransferUtility.caculateNewHeatLevel( heatLevel, appliedHeatLevel, heatResistance );
      
      // Update tint of pot, based on heatLevel.
      var spriteRenderer : SpriteRenderer = GetComponent( SpriteRenderer );
      if( spriteRenderer != null )
      {
        spriteRenderer.color = Color.Lerp( Color.white, Color.black, cookedLevel );
      }
    }
  
    // TODO: Check if pan has (food) contents.
    if( false )
    {
      //var food : Food = getFoodContents();
      
      // Apply this pan's heat level to the food.
      //food.applyHeatLevel( heatLevel );
    }
  }
  
  function OnMouseDown()
  {
    //print( "mouse down" );
  }
  
  function OnMouseUp()
  {
    //print( "mouse up" );
    dragging = false;
    //panCenterToDragPointDistance = Vector3.zero;
  }
  
  function OnMouseDrag()
  {
    //print( "drag'n" );
    
    var curScreenPoint : Vector3 = new Vector3( Input.mousePosition.x, Input.mousePosition.y, Camera.main.transform.position.z );
    var curPosition :    Vector3 = Camera.main.ScreenToWorldPoint( curScreenPoint );
    curPosition.z = 0.0f; // NOTE: Weird 2D plane stuff!!!
  
    if( !dragging )
    {
      dragging = true;
      //print( "" + curPosition.x + ":" + curPosition.y + ":" + curPosition.z );
      
      //if( handle != null )
      {
        //print( "drag with handle" );
      
        //panCenterToDragPointDistance = transform.position - curPosition;
      }
    }
    
    //transform.position = curPosition + panCenterToDragPointDistance;
  }
  
  public function associateBurnerWithPan( newBurner : StoveElement )
  {
    //print( "associate" );
    //burner = newBurner;
    
    if( newBurner != null )
    {
      //newBurner.setPan( this );
    }

    // TODO: Orient pan a handle?
  }
  
  function OnTriggerEnter2D( other: Collider2D )
  {
    var otherName : String = other.name;
    if( otherName.Contains( "Pan" ) && !otherName.Contains( "PanHandle" ) ) // NOTE: This is super sensitive bad coding!
    {
      //print( otherName );
      var curPan : Pan = other.GetComponent( Pan );
      if( curPan != null )
      {
        //associateBurnerWithPan( curPan );
      }
    }
  }
  
  function OnTriggerExit2D( other : Collider2D )
  {
    //associate( null );
  }
  
  public function applyHeatLevel( newHeatLevel : float )
  {
    appliedHeatLevel = newHeatLevel;
  }
}
